//Not enjoying "Content" due to a lack of loop there but I'm sure to learn it later
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </>
  )
}



const Header = (Headerprops) =>
{
  return (
      <h1> {Headerprops.course.name} </h1>
  )
}



const Content = (Contentprops) =>
{
  return (
    <>
      < Part name = {Contentprops.course.parts[0].name}  exercise = {Contentprops.course.parts[0].exercises} />
      < Part name = {Contentprops.course.parts[1].name}  exercise = {Contentprops.course.parts[1].exercises} />
      < Part name = {Contentprops.course.parts[2].name}  exercise = {Contentprops.course.parts[2].exercises} />
    </>
  )
}



const Part = (Partprops) =>
{
  return (
    <p> {Partprops.name} {Partprops.exercise} </p>
  )
}



const Total = (Totalprops) =>
{
  return (
    <p> Number of exercises {sum(Totalprops.course.parts[0].exercises, Totalprops.course.parts[1].exercises, Totalprops.course.parts[2].exercises)} </p>
  )
}



const sum = (x1,x2,x3) => x1+x2+x3

export default App