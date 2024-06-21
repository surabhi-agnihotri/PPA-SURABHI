// // components/SignUpForm.jsx

// import React from 'react';
// import { useForm, Controller } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
// import Hero from './Hero';

// const schema = yup.object().shape({
//   name: yup.string().required('Name is required'),
//   email: yup.string().email('Invalid email').required('Email is required'),
//   phoneNumber: yup.string().required('Phone number is required'),
//   password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
//   confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
// });

// const SignUpForm = ({ onSuccess }) => {
//   const { handleSubmit, control, formState: { errors } } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const onSubmit = (data) => {
//     console.log(data); // Replace with actual API call or other logic
//     onSuccess(); // Call a callback function to handle success (e.g., show a popup)
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto my-8 p-4 bg-white shadow-md rounded-md">
//       <h2 className="text-2xl font-semibold mb-4 text-center">Sign Up</h2>
//       <div className="mb-4">
//         <label htmlFor="name" className="block mb-1">Name</label>
//         <Controller
//           name="name"
//           control={control}
//           render={({ field }) => <input {...field} id="name" type="text" className={`w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md`} />}
//         />
//         {errors.name && <p className="text-red-500 mt-1">{errors.name.message}</p>}
//       </div>
//       <div className="mb-4">
//         <label htmlFor="email" className="block mb-1">Email</label>
//         <Controller
//           name="email"
//           control={control}
//           render={({ field }) => <input {...field} id="email" type="email" className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md`} />}
//         />
//         {errors.email && <p className="text-red-500 mt-1">{errors.email.message}</p>}
//       </div>
//       <div className="mb-4">
//         <label htmlFor="phoneNumber" className="block mb-1">Phone Number</label>
//         <Controller
//           name="phoneNumber"
//           control={control}
//           render={({ field }) => <input {...field} id="phoneNumber" type="tel" className={`w-full px-3 py-2 border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} rounded-md`} />}
//         />
//         {errors.phoneNumber && <p className="text-red-500 mt-1">{errors.phoneNumber.message}</p>}
//       </div>
//       <div className="mb-4">
//         <label htmlFor="password" className="block mb-1">Password</label>
//         <Controller
//           name="password"
//           control={control}
//           render={({ field }) => <input {...field} id="password" type="password" className={`w-full px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md`} />}
//         />
//         {errors.password && <p className="text-red-500 mt-1">{errors.password.message}</p>}
//       </div>
//       <div className="mb-4">
//         <label htmlFor="confirmPassword" className="block mb-1">Confirm Password</label>
//         <Controller
//           name="confirmPassword"
//           control={control}
//           render={({ field }) => <input {...field} id="confirmPassword" type="password" className={`w-full px-3 py-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-md`} />}
//         />
//         {errors.confirmPassword && <p className="text-red-500 mt-1">{errors.confirmPassword.message}</p>}
//       </div>
//       <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">Sign Up</button>
//     </form>
//   );
// };

// export default SignUpForm;






// components/SignUpForm.jsx
// "use client";

// import React from 'react';
// import { useForm, Controller } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
// import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css';

// const schema = yup.object().shape({
//   name: yup.string().required('Name is required'),
//   email: yup.string().email('Invalid email').required('Email is required'),
//   phoneNumber: yup.string().required('Phone number is required'),
//   password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
//   confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
// });

// const SignUpForm = ({ onSuccess }) => {
//   const { handleSubmit, control, formState: { errors } } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const onSubmit = (data) => {
//     console.log(data); // Replace with actual API call or other logic
//     onSuccess(); // Call a callback function to handle success (e.g., show a popup)
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto my-8 p-4 bg-white shadow-md rounded-md">
//       <h2 className="text-2xl font-semibold mb-4 text-center">Sign Up</h2>
//       <div className="mb-4">
//         <label htmlFor="name" className="block mb-1">Name</label>
//         <Controller
//           name="name"
//           control={control}
//           render={({ field }) => <input {...field} id="name" type="text" className={`w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md`} />}
//         />
//         {errors.name && <p className="text-red-500 mt-1">{errors.name.message}</p>}
//       </div>
//       <div className="mb-4">
//         <label htmlFor="email" className="block mb-1">Email</label>
//         <Controller
//           name="email"
//           control={control}
//           render={({ field }) => <input {...field} id="email" type="email" className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md`} />}
//         />
//         {errors.email && <p className="text-red-500 mt-1">{errors.email.message}</p>}
//       </div>
//       <div className="mb-4">
//         <label htmlFor="phoneNumber" className="block mb-1">Phone Number</label>
//         <Controller
//           name="phoneNumber"
//           control={control}
//           render={({ field }) => (
//             <PhoneInput
//               {...field}
//               inputProps={{ name: 'phoneNumber', required: true }}
//               country={'us'}
//               className={`w-full ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} rounded-md`}
//             />
//           )}
//         />
//         {errors.phoneNumber && <p className="text-red-500 mt-1">{errors.phoneNumber.message}</p>}
//       </div>
//       <div className="mb-4">
//         <label htmlFor="password" className="block mb-1">Password</label>
//         <Controller
//           name="password"
//           control={control}
//           render={({ field }) => <input {...field} id="password" type="password" className={`w-full px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md`} />}
//         />
//         {errors.password && <p className="text-red-500 mt-1">{errors.password.message}</p>}
//       </div>
//       <div className="mb-4">
//         <label htmlFor="confirmPassword" className="block mb-1">Confirm Password</label>
//         <Controller
//           name="confirmPassword"
//           control={control}
//           render={({ field }) => <input {...field} id="confirmPassword" type="password" className={`w-full px-3 py-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-md`} />}
//         />
//         {errors.confirmPassword && <p className="text-red-500 mt-1">{errors.confirmPassword.message}</p>}
//       </div>
//       <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">Sign Up</button>
//     </form>
//   );
// };

// export default SignUpForm;










// import React from 'react';
// import { useForm, Controller } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
// import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css';
// import axios from 'axios';

// const schema = yup.object().shape({
//   name: yup.string().required('Name is required'),
//   email: yup.string().email('Invalid email').required('Email is required'),
//   phoneNumber: yup.string().required('Phone number is required'),
//   password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
//   confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
// });

// const SignUpForm = ({ onSuccess }) => {
//   const { handleSubmit, control, formState: { errors } } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const onSubmit = async (data) => {
//     try {
//       await axios.post('/api/users/signup', data);
//       onSuccess(); // Call a callback function to handle success (e.g., show a popup)
//     } catch (error) {
//       console.error('Sign up failed:', error.response.data.error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto my-8 p-4 bg-white shadow-md rounded-md">
//       <h2 className="text-2xl font-semibold mb-4 text-center">Sign Up</h2>
//       <div className="mb-4">
//         <label htmlFor="name" className="block mb-1">Name</label>
//         <Controller
//           name="name"
//           control={control}
//           render={({ field }) => <input {...field} id="name" type="text" className={`w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md`} />}
//         />
//         {errors.name && <p className="text-red-500 mt-1">{errors.name.message}</p>}
//       </div>
//       <div className="mb-4">
//         <label htmlFor="email" className="block mb-1">Email</label>
//         <Controller
//           name="email"
//           control={control}
//           render={({ field }) => <input {...field} id="email" type="email" className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md`} />}
//         />
//         {errors.email && <p className="text-red-500 mt-1">{errors.email.message}</p>}
//       </div>
//       <div className="mb-4">
//         <label htmlFor="phoneNumber" className="block mb-1">Phone Number</label>
//         <Controller
//           name="phoneNumber"
//           control={control}
//           render={({ field }) => (
//             <PhoneInput
//               {...field}
//               inputProps={{ name: 'phoneNumber', required: true }}
//               country={'us'}
//               className={`w-full ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} rounded-md`}
//             />
//           )}
//         />
//         {errors.phoneNumber && <p className="text-red-500 mt-1">{errors.phoneNumber.message}</p>}
//       </div>
//       <div className="mb-4">
//         <label htmlFor="password" className="block mb-1">Password</label>
//         <Controller
//           name="password"
//           control={control}
//           render={({ field }) => <input {...field} id="password" type="password" className={`w-full px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md`} />}
//         />
//         {errors.password && <p className="text-red-500 mt-1">{errors.password.message}</p>}
//       </div>
//       <div className="mb-4">
//         <label htmlFor="confirmPassword" className="block mb-1">Confirm Password</label>
//         <Controller
//           name="confirmPassword"
//           control={control}
//           render={({ field }) => <input {...field} id="confirmPassword" type="password" className={`w-full px-3 py-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-md`} />}
//         />
//         {errors.confirmPassword && <p className="text-red-500 mt-1">{errors.confirmPassword.message}</p>}
//       </div>
//       <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">Sign Up</button>
//     </form>
//   );
// };

// export default SignUpForm;






import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import axios from 'axios';




const SignUpButton = () => {
    const buttonStyle = {
      backgroundColor: '#1a202c',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    };
  
    const hoverStyle = {
      backgroundColor: '#3182ce',
    };
  
    return (
      <button
        style={{ ...buttonStyle }}
        onMouseEnter={() => {}} // Optional: Add logic if needed
        onMouseLeave={() => {}} // Optional: Add logic if needed
      >
        Sign Up
      </button>
    );
  };
  

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phoneNumber: yup.string().required('Phone number is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
});

const SignUpForm = ({ onSuccess }) => {
  const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      
      console.log('Form data:', data); 

      
      onSuccess();

    } catch (error) {
      console.error('Sign up failed:', error.response ? error.response.data.error : error.message);
      
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto my-8 p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">Sign Up</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block mb-1">Name</label>
        <Controller
          name="name"
          control={control}
          render={({ field }) => <input {...field} id="name" type="text" className={`w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md`} />}
        />
        {errors.name && <p className="text-red-500 mt-1">{errors.name.message}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-1">Email</label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => <input {...field} id="email" type="email" className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md`} />}
        />
        {errors.email && <p className="text-red-500 mt-1">{errors.email.message}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="phoneNumber" className="block mb-1">Phone Number</label>
        <Controller
          name="phoneNumber"
          control={control}
          render={({ field }) => (
            <PhoneInput
              {...field}
              inputProps={{ name: 'phoneNumber', required: true }}
              country={'us'}
              className={`w-full ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} rounded-md`}
            />
          )}
        />
        {errors.phoneNumber && <p className="text-red-500 mt-1">{errors.phoneNumber.message}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block mb-1">Password</label>
        <Controller
          name="password"
          control={control}
          render={({ field }) => <input {...field} id="password" type="password" className={`w-full px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md`} />}
        />
        {errors.password && <p className="text-red-500 mt-1">{errors.password.message}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="confirmPassword" className="block mb-1">Confirm Password</label>
        <Controller
          name="confirmPassword"
          control={control}
          render={({ field }) => <input {...field} id="confirmPassword" type="password" className={`w-full px-3 py-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-md`} />}
        />
        {errors.confirmPassword && <p className="text-red-500 mt-1">{errors.confirmPassword.message}</p>}
      </div>
      <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
