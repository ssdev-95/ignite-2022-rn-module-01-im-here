import { StatusBar } from 'expo-status-bar';
import {Home} from './src/screens/home';

export default function App() {
  return (
	  <>
		  <StatusBar
			  style="light"
				translucent={false}
				backgroundColor="#03000D"
			/>
			<Home />
		</>
  );
}
