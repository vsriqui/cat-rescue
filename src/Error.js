

function Error({error}) {
  console.log(error, 'zzz')
  return (
    error ?
    <h2>{ error }</h2>
    :
    <h2> 'You chose an erroneous path.' </h2>
  )
} 


export default Error