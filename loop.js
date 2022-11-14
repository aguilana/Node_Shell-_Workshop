/* eslint-disable */

function cool(){
    console.log('Running inside the cool function')
    setTimeout(
      () => {
          console.log('Timing out inside the cool function')
      },
      3000
    )
  }
  
  setTimeout(
    () => {
      console.log('I am not in any function')
    },
    3000
  )
  
  cool()
  debugger
  console.log('End of File')