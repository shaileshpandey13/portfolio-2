import React from 'react'
let arr=[
    {name:'sarthak',age:'21'},
    {name:'sarthak',age:'21'},
];    
export default function Demo22() {
    
  return (

        arr.map((obj)=>{
                return(
                    <>
                    <p>your name{obj.name} and your age {obj.age}</p></>
                ) ;
                
            }
        )

  )
}
