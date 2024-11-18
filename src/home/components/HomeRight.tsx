import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
// import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import { grey } from "@mui/material/colors";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CircularProgress from "@mui/material/CircularProgress";

import { getUser } from "../services/getUser";
import { IUser } from "../../store/types";
import { useAppDispatch } from "../../hooks/redux";
import { addUser } from "../../store/userSlice";
import { FormHelperText } from "@mui/material";

type FormValues = {
	documentNumber: string;
	phone: string;
	acceptTermCommercial: boolean;
	acceptPrivacy: boolean;
};

export const HomeRight = () => {
	const [typeDoc, setTypeDoc] = useState("dni");
	// const [isDisabled, setisDisabled] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const handleChange = (event: SelectChangeEvent) => {
		setTypeDoc(event.target.value as string);
	};

	// const handleChangecheck = (event: boolean) => {
	// 	setisDisabled(!event);
	// };

	const dispatch = useAppDispatch();

	const {
		handleSubmit,
		register,
		control,
		formState: { errors },
		// control,
	} = useForm<FormValues>({
		defaultValues: {
			documentNumber: "",
			phone: "",
			acceptPrivacy: true,
			acceptTermCommercial: true,
		},
	});

	useEffect(() => {
		console.log(errors);
	}, [errors]);

	const navigate = useNavigate();

	const onSubmit = async (data: FormValues) => {
		// console.log(data);
		setIsLoading(true);
		const api = await getUser();
		const user: IUser = {
			birthDay: api.birthDay,
			name: api.name,
			lastName: api.lastName,
			phone: data.phone,
			documentNumber: data.documentNumber,
			acceptPrivacy: data.acceptPrivacy,
			acceptTermCommercial: data.acceptTermCommercial,
		};
		console.log(user);
		dispatch(addUser(user));
		navigate("your-plan");
		setIsLoading(false);
	};

	const getMsgError = (
		type: string | undefined,
		name: string,
		count: number
	) => {
		let msg = "";

		if (type == "required") msg = `${name} es requerido`;
		else if (type == "minLength") msg = `Número minimo es ${count}`;
		else if (type == "maxLength") msg = `Número maximo es ${count}`;
		return msg;
	};

	return (
		<section className="home-right">
			<div className="tag-promo">Seguro Salud Flexible</div>
			<h2>Creado para ti y tu familia</h2>
			<p className="description-promo">
				Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
				asesoría. 100% online.
			</p>
			<form className="form-get-data" onSubmit={handleSubmit(onSubmit)}>
				<div className="row-form">
					<FormControl fullWidth className="type-doc">
						<Select
							className="type-doc-doc"
							IconComponent={KeyboardArrowDownIcon}
							value={typeDoc}
							onChange={handleChange}
						>
							<MenuItem value="dni">DNI</MenuItem>
						</Select>
					</FormControl>
					<TextField
						className="nro-dni"
						id="documentNumber"
						label="Nro. de documento"
						type="number"
						{...register("documentNumber", {
							required: true,
							pattern: /[0-9]{8}/,
							minLength: 8,
							maxLength: 8,
						})}
						error={!!errors.documentNumber}
						helperText={getMsgError(
							errors.documentNumber?.type,
							"Nro. de documento",
							8
						)}
					/>
				</div>
				<div className="nro-phone">
					<TextField
						fullWidth
						id="phone"
						label="Celular"
						type="number"
						{...register("phone", {
							required: true,
							pattern: /[0-9]{9}/,
							minLength: 9,
							maxLength: 9,
						})}
						error={!!errors.phone}
						helperText={getMsgError(errors.phone?.type, "Celular", 9)}
					/>
				</div>

				<div className="cus-form">
					<Controller
						name="acceptPrivacy"
						control={control}
						render={({ field, fieldState: { error } }) => (
							<FormControl sx={{ m: 3 }} error={!!error} required>
								<FormControlLabel
									control={
										<Checkbox
											color="default"
											inputRef={field.ref}
											checked={field.value ?? false}
											onChange={field.onChange}
											onBlur={field.onBlur}
											inputProps={{ "aria-label": "controlled" }}
											sx={{
												color: grey[800],
												"&.Mui-checked": {
													color: grey[900],
												},
											}}
										/>
									}
									label="Acepto lo Política de Privacidad"
								/>
								{error?.message ? (
									<FormHelperText>{error?.message}</FormHelperText>
								) : null}
							</FormControl>
						)}
						rules={{ required: "Política de Privacidad is required" }}
					/>

					<Controller
						name="acceptTermCommercial"
						control={control}
						render={({ field, fieldState: { error } }) => (
							<FormControl sx={{ m: 3 }} error={!!error} required>
								<FormControlLabel
									control={
										<Checkbox
											color="default"
											inputRef={field.ref}
											checked={field.value ?? false}
											onChange={field.onChange}
											onBlur={field.onBlur}
											inputProps={{ "aria-label": "controlled" }}
											sx={{
												color: grey[800],
												"&.Mui-checked": {
													color: grey[900],
												},
											}}
										/>
									}
									label="Acepto la Política Comunicaciones Comerciales"
								/>
								{error?.message ? (
									<FormHelperText>{error?.message}</FormHelperText>
								) : null}
							</FormControl>
						)}
						rules={{
							required: "Política Comunicaciones Comerciales is required",
						}}
					/>
				</div>

				<div className="term-condition">
					<a href="#">Aplican Términos y Condiciones.</a>
				</div>
				<div className="group-btn">
					<button className="btn" disabled={isLoading}>
						{isLoading ? (
							<CircularProgress className="loading" color="inherit" />
						) : (
							<span>Cotiza aquí</span>
						)}
					</button>
				</div>
			</form>
		</section>
	);
};
