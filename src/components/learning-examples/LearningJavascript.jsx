//create an object, e dont need a class in js

const person={
    name: 'Ranga',
    address: {
        
        line1: '123 Baker Street London',
        city:'London',
        country:'UK',
    },
    profiles: ['twitter','linedin','instagram'],
    //we can store a function in an object!
    printProfile: () => { 
        
        person.profiles.map(
            (profile) => {

                console.log(profile)
            }
        )
        console.log(person.profiles[0])
    }
}


export default function LearningJavaScript (){
    return (
        <>
         <div>{person.name}</div>
        <div>{person.address.line1}</div>
        <div>{person.profiles[0]}</div>
        <div>{person.printProfile()}</div>
        </>
       
    );
}