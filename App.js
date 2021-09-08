import React from 'react';
import {
  Button, 
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

const loginValidationSchema = yup.object().shape({
  Name: yup.string()
  .min(2, 'Too Short!')
  .max(50, 'Too Long!')
  .required('Required'),
  Job: yup
    .string()
    .min(4, ({ min }) => `Job must be at least ${min} characters`)
    .required('Job is required'),
  Zipcode:  yup
  .string()
  .min(5, ({ min }) => `Job must be at least ${min} characters`)
  .required('Zipcode is required'),
})

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
      <View style={styles.loginContainer}>
          <Text>Login Screen</Text>
          <Formik
   validationSchema={loginValidationSchema}
   initialValues={{ Zipcode: '', Job: '' , Zipcode: ''}}
   onSubmit={values => console.log(values)}
 >
   {({
     handleChange,
     handleBlur,
     handleSubmit,
     values,
     errors,
     isValid,
   }) => (
     <>
       <TextInput
         name="Name"
         placeholder="Name Address"
         style={styles.textInput}
         onChangeText={handleChange('Name')}
         onBlur={handleBlur('Name')}
         value={values.Name}
         keyboardType="Name-address"
       />
       {errors.Name &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.Name}</Text>
       }
       <TextInput
         name="Job"
         placeholder="Job"
         style={styles.textInput}
         onChangeText={handleChange('Job')}
         onBlur={handleBlur('Job')}
         value={values.Job}
       />
       {errors.Job &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.Job}</Text>
       }
       <TextInput
         name="Zipcode"
         placeholder="Zipcode"
         style={styles.textInput}
         onChangeText={handleChange('Zipcode')}
         onBlur={handleBlur('Zipcode')}
         value={values.Zipcode}
         keyboardType="Zipcode"
       />
       {errors.Zipcode &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.Zipcode}</Text>
       }
       <Button
         onPress={handleSubmit}
         title="LOGIN"
         disabled={!isValid}
       />
     </>
   )}
 </Formik>
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    width: '80%',
    alignItems: 'center',
  },
  loginContainer: {
    width: '80%',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    elevation: 10,
    backgroundColor: '#e6e6e6'
  },
  textInput: {
    height: 40,
    width: '100%',
    margin: 10,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
  },
})

export default App
