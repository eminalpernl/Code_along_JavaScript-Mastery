import express, { Router } from 'express';
import { homepage, getUsers, getOneId, createNewUser, deleteUser, updateUser } from "../controllers/users.js";

const router = express.Router();


//NOT: Since we add "/users" as an endpoint to the index.js file.
// We setting the routes only "/".
router.get('/', homepage);

router.get('/users', getUsers);

router.get('/users/:id', getOneId);


router.post('/users', createNewUser);
//NOT: Even though we work with a dummy database, after adding new user through a post request
// via the POSTMAN, our database is gonna be updated when we make a GET request with Browser.



router.delete('/users/:id', deleteUser);


router.patch('/users/:id', updateUser);


export default router;