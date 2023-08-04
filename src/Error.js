

function Error({error}) {
  console.log(error, 'zzz')
  return (
    error ?
    <h2>{ error }</h2>
    :
    <h2> 'These are not the cats you\'re looking for.' </h2>
  )
} 


export default Error