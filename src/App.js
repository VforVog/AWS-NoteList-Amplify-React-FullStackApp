import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import {
  Button,
  Heading,
  Card,
  View,
  withAuthenticator,
  Image,
} from "@aws-amplify/ui-react";


  function App({signOut}){
      return (
        <View className="App">
         <Card>
          <image src ={logo} className="Ap-Logo" alt="Logo" />
          <Heading level={1}>We now have Auth! </Heading>
          </Card>
        <Button onClick={signOut}> Sign Out</Button>
      </View>
      );
    }

 

export default withAuthenticator(App);