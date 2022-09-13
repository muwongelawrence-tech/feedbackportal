import React from 'react';
import { Formik }from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().max(50).required(),
  businessname: Yup.string().max(50).required(),
  contact: Yup.string().max(15).required(),
  location: Yup.string().max(10).required(),
  comment: Yup.string().required()

});


function App() {

  const uploadValues = (values) => {
      //  e.preventDefault();
       console.log(values);
       // lofgic of submitting goes here

  }

  

  return (
    <div className = {`grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-600 
    bg-seconds_bg bg-no-repeat bg-cover  bg-opacity-50 `}
      // style = "background-image: url('/images/bg2.jpg');"
    >

{/* left */}
<div className='m-2  h-[400px]  lg:h-screen   relative  '>

{/* bg-seconds_bg bg-no-repeat bg-cover bg-center bg-opacity-20 */}

<div className='absolute left-8 top-20 h-10 w-20 flex items-center' >
         <img
           src = {"/images/logo.png"}
           layout='fill'
         />
   </div>

   <div className = " absolute top-52 left-8 ">
       <h1 className = "text-3xl m-3 text-gray-100">
            AT Seconds we deliver services in seconds.
       </h1>

       <h2 className = "m-2 text-sm  font-medium text-gray-100 "> Contact  us  any time.</h2>

       <h3 className = "m-2 text-sm  font-medium text-gray-100 ">
          Rate our services by giving us a feed back such that we know how better we can improve them.
       </h3>


      <button
        
        className = {`text-purple-500 bg-white px-10 py-4 rounded-full shadow-md font-bold
                        my-3 hover:shadow-xl active:scale-90 transition duration-150 font-mono`}
               
      >
          Send Feedback
      </button>


      
    
   </div>
</div>

{/* Right */}
<div className = " px-2 mt-2 md:mt-0  py-10 ">

    <div className = " flex flex-col bg-white  rounded-md p-10  max-w-md mx-auto shadow-2xl">

       <p className = "text-xl font-semibold text-left font-serif  mb-2 text-gray-700">
         FeedBack
       </p>


        {/* form section */}

        <Formik
             initialValues = {{ 
              name: "",
              businessname:"",
              contact: "",
              location:"",
              comment: ""}}

             onSubmit = { values => console.log(values) }
             validationSchema = { validationSchema }
        >

          {
            ({ handleChange ,handleSubmit, errors , touched }) => (
                <>
                 
         <form action = "" className = "mt-3 grid grid-cols-1 space-y-3">
       
           <label 
            htmlFor="name"
            className = "block"
           >

           {/* <span className="block text-sm font-medium text-slate-700">Name :</span> */}

             <input type="text" 
               placeholder = "Name"
               id = "name" 
               className='input '
               onChange = { handleChange("name") }
             />

            { touched.name &&  errors.name && 
             <p className = "text-sm text-red-400 my-1">{errors.name}</p>
            }

          </label>

          <label 
            htmlFor="business_name"
            className = "block"
           >

           {/* <span className="block text-sm font-medium text-slate-700"> Business Name :</span> */}

             <input type="text" 
               placeholder = "Business Name"
               id = "businessname" 
               className='input '
               onChange = { handleChange("businessname") }
             />

           { touched.businessname &&  errors.businessname && 
             <p className = "text-sm text-red-400 my-1">{errors.businessname}</p>
            }

          </label>

          <label 
            htmlFor="contact"
            className = "block"
           >

           {/* <span className= { `block text-sm font-medium text-slate-700`}> Contact :</span> */}

             <input type = "text" 
               placeholder = "Contact"
               id = "contact" 
               className= { `input `}
               onChange = { handleChange("contact") }
             />

           { touched.contact &&  errors.contact && 
             <p className = "text-sm text-red-400 my-1">{ errors.contact }</p>
            }

          </label>

          
          <label 
            htmlFor="location"
            className = "block"
           >

           {/* <span className="block text-sm font-medium text-slate-700"> Location:</span> */}

             <input type="text" 
               placeholder = "Business Location"
               id = "location" 
               className='input '
               onChange = { handleChange("location") }
             />

            { touched.location &&  errors.location && 
             <p className = "text-sm text-red-400 my-1">{ errors.location }</p>
            }

          </label>

          <label 
            htmlFor="Comment"
            className = "block"
           >

           {/* <span className="block text-sm font-medium text-slate-700"> Comment:</span> */}


          <textarea 
          id="comment" 
          name="comment" 
          rows="4" cols="50"
          className='input text-gray-800 resize-none' placeholder = "Type your comment here.."
          maxlength="200" 
          onChange = { handleChange("comment") }
          >
         
          </textarea>

          { touched.comment &&  errors.comment && 
             <p className = "text-sm text-red-400 my-1">{ errors.comment }</p>
          }

          </label>


         
          <button 
           type = "submit"
           className = {`bg-blue-400 hover:bg-blue-600 active:bg-blue-800 text-white p-3 
           cursor-pointer rounded-md `}

           onClick = { e => {
            e.preventDefault();
             handleSubmit();
          }}
          >
            Submit Feedback
          </button>

        
       </form>


                </>
            )
          }
       </Formik>

      

    </div>
</div>

</div>
  );
}

export default App;
