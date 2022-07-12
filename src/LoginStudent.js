import './App.css';
import React from "react";
import { useForm } from "react-hook-form";

function LoginStudent() {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit
  } = useForm();
  // const watchShowMark = watch("showMark", false); // you can supply default value as second argument
  const watchAllFields = watch(); // when pass nothing as argument, you are watching everything
//   const watchFields = watch(["showMark", "number"]); // you can also target specific fields by their names

 const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  console.log("watchAllFields", watchAllFields);
  // console.log("watchFields", watchFields);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
     <label>TZ</label>
            <input type="password" {...register("TZ", {maxLength:9 })} />
            {errors.TZ && <p>{"An ID card must be exactly 9 digits long"}</p>}
        <label>Name</label>
        <input
          type="text"
          {...register("name", { required: true, minLength: 2 })}
        />
        {/* {errors.name && (
          <p>{"The Name Field is Required "}</p>
        )}
         <label>address</label>
        <input
          type="text"
          {...register("address", { required: true, maxLength: 50 })}
        />
     
         {/* <label>Behavior</label>
         <select name="behaviorid" id="behaviors">
  <option value="good" id>good</option>
  <option value="trying">trying</option>
  <option value="standard">standard</option>
  <option value="not good">not good</option>
</select> */}

        {/* <input
          type="text"
          {...register("behavior", { required: true, maxLength: 50 })}
        /> */}
        {/* {errors.name && (
          <p>{"The behavior Field is Required and must be > 49 characters"}</p>
        )} */} 
        {/* <label>Show Mark</label>
        <input type="checkbox" {...register("showMark")} />
        {watchShowMark && (
          <>
            <label>Mark</label>
            <input type="number" {...register("mark", { min: 50 })} />
            {errors.name && <p>{"The number must be greater then 49"}</p>}
          </>
        )} */}
        {/* based on yes selection to display Mark */}
        <input type="submit" />
      </form>
      {/* <div>
        {watchAllFields.name ? (
          <>
            <label>Watched Fields:</label>name: {watchAllFields.name}
            <br/>
            address: {watchAllFields.address}
          </>
        ) : (
          ""
        )}
      </div> */}
      
    </>
    
  );
}

export default LoginStudent;