/* ! ********     Declaring variables in Typescript     **********/

    let greetings: string = "Hi Arpit 👋";
    let myNum = 14;

    myNum.toUpperCase();        // Property 'toUpperCase' does not exist on type 'number'

    greetings = true;           // Type 'boolean' is not assignable to type 'string'

    console.log(greetings.toUppercase());
                                // Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'?

    // ! number
        let userId: number = 58.28;
        // we dont need to give 'userId' a type because typescript can 'infer'
        // that 'userId' is a number, if we assign value just after it.

    // ! boolean
        let isLoggedIn: boolean = false;

    // ! any
        let hero;

        function getHero(){ 
            return "thor"
        }

        hero = getHero();         
        // in this case typescript cannot infer the type and if we hover over 
        // 'hero' it shows type 'any'
        // todo ~ So we should have declared it as "let hero: string";

    // ! Type stricting function parameters

        function addTwo(num: number){
            return num + 2;
        }
        addTwo(5);

        
         function getUpper(val: string){         // in the case of function parameters we must define its type
            return val.toUpperCase();
        }
        getUpper("sky");

        
        function signUpUser(name:string, email:string, isPaid: boolean){
            // anything you don't wanna do
        }
        // * signUpUser(1,2,3);                      // Argument of type 'number' is not assignable to parameter of type 'string'

        
        let loginUser = (email: string, isPaid:boolean = false) => {
            // anything you wanna do
        }
        // * loginUser();                            // An argument for 'email' was not provided
        loginUser("arpittyagi102@gmail.com");

    // ! Type stricting function returns
        function AddThree(num: number): number{      // Thats how we do it
            return num + 3;
            //return "Take a bath";
        }

        const letsGo = (s: string):string => {
            return "Let Us Go";
        } 

        // * We can also assign two types to a function

        function consoleError(err: string): void{       // A good practice to also mention 'void'
            console.error(err);
        }

        function handleError(err: string): never{       // some functions never return a value
            throw new Error(err);
        }

        

export {};