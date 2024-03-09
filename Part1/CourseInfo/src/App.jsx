//Not enjoying "Content" due to a lack of loop there but I'm sure to learn it later
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

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
      < Part sentence = {Contentprops.sentence1}  number={Contentprops.number1} />
      < Part sentence = {Contentprops.sentence2}  number={Contentprops.number2} />
      < Part sentence = {Contentprops.sentence3}  number={Contentprops.number3} />
    </>
  )
}



const Part = (Partprops) =>
{
  return (
    <p> {Partprops.sentence} {Partprops.number} </p>
  )
}



const Total = (Totalprops) =>
{
  return (
    <p> Number of exercises {Totalprops.sum} </p>
  )
}


export default App