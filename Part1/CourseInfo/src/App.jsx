//Not enjoying "Content" due to a lack of loop there but I'm sure to learn it later
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const sentences = 3

  return (
    <>
      < Header sentence = {course} />
      
      < Content 
        sentence1 = {part1}  number1 = {exercises1} 
        sentence2 = {part2}  number2 = {exercises2} 
        sentence3 = {part3}  number3 = {exercises3}
      />
      
      < Total sum = {exercises1 + exercises2 + exercises3} />
    </>
  )
}



const Header = (Headerprops) =>
{
  return (
      <h1> {Headerprops.sentence} </h1>
  )
}



const Content = (Contentprops) =>
{
  return (
    <>
      <p> {Contentprops.sentence1} {Contentprops.number1} </p>
      <p> {Contentprops.sentence2} {Contentprops.number2} </p>
      <p> {Contentprops.sentence3} {Contentprops.number3} </p>
    </>
  )
}



const Total = (Totalprops) =>
{
  return (
    <p> Number of exercises {Totalprops.sum} </p>
  )
}


export default App