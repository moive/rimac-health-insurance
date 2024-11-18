import { RouterProvider } from "react-router-dom";
import { router } from "./router/RouterNavigation";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
	return (
		<>
			<Provider store={store}>
				<RouterProvider
					router={router}
					future={{
						v7_startTransition: true,
					}}
				/>
			</Provider>
		</>
	);
};

export default App;
