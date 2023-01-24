
import { v4 as uuidv4 } from 'uuid';

let users = [
    {
    ID:1,
    firstName:"John",
    lastName:"Doe",
    age: 25
    },  
    {
    ID:2,
    firstName:"Selami",
    lastName:"Basturk",
    age: 41
    }
];


export const homepage = (req, res)=>{
    console.log(`Hello from users.js. This is url: ${req.url} and This is params${req.params} `);
    res.send(`Hello from users.js This is url: ${req.url} and This is params${req.params} `);
} 

export const getUsers = (req, res)=>{
    res.send(users)
}

export const getOneId = (req,res)=>{

    const { id } = req.params
    //console.log(req.body, req.url, req.params);
    const foundUser = users.find((user)=>user.ID.toString()===id)
    res.send(foundUser)
    //res.send(req.url)
    //res.json({msg: `${req.body}, ${req.url}, ${req.params}`})
}

export const createNewUser = (req,res)=>{
    // const newUser = {
    //     ID:uuidv4(),
    //     firstName :req.body.firstName,
    //     lastName:req.body.lastName,
    //     age: req.body.age,
    // };

    // we can code this with spread operator.
    const user = req.body;
    const newUser = { ...user, ID:uuidv4() } ;

    if (!newUser.firstName || !newUser.lastName || !newUser.age) {
        return res.status(400).json({ msg: 'Please include a name and email' });
    }

    users.push(newUser);
    console.log(users);
    res.json(users);
    // res.send('Post request reached')
   
    
};

export const deleteUser = (req, res)=>{
    const { id } = req.params;
    
    users = users.filter((user)=>user.ID.toString()!==id);
    res.send(`User with the ${id} deleted from the database`)


    // const deletedUser = users.find((user)=>user.ID.toString()===id)
    // console.log();
    // res.send(`User with the ${id} deleted from the database`)
};


export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    const user = users.find((user) => user.ID == id);
    console.log(user);

    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;



    res.send(`User with the ${id} updated`)


    // const deletedUser = users.find((user)=>user.ID.toString()===id)
    // console.log();
    // res.send(`User with the ${id} deleted from the database`)
}