// ## **Part 8: Practice Exercises**

// ## 🎯 Task 1: Greeting Card

// **Task:** Create a reusable greeting card component using props

// **Requirements:**
// 1. Create `GreetingCard.jsx`
// 2. Accept props: `name`, `message`, `color`
// 3. Display the name and message
// 4. Use the `color` prop for background styling
// 5. In `App.jsx`, create 3 different greeting cards with different colors

// **Sample Output:**
// ```
// Hello, Tunde!
// Have a great day!
// [Green background]
// ```

// **Challenge:** Add a default color if no color is provided
  function GreetingCard(props) {
     return (
        <div style={{backgroundColor: props.color}} className="conatainer">

            <h2>{props.name}</h2>
            <p>{props.message}</p>
            <p>{props.color}</p>
        </div>
     );
  }

 <GreetingCard name= "Foyinsola" message= "Do have a blissful day!" color= "Green background" />

export default GreetingCard;