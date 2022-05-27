import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 class='text-3xl font-bold'>1. How will you improve the performance of a React Application?</h2>
            <p class='text-2xl'><strong>Ans: </strong><br />
                1. Keeping component state local where necessary.<br />
                2. Memoizing React components to prevent unnecessary re-renders.<br />
                3. Code-splitting in React using dynamic import().<br />
                4. Windowing or list virtualization in React.<br />
                5. Lazy loading images in React.
            </p><br />
            <h2 class='text-3xl font-bold'>2. What are the different ways to manage a state in a React application?</h2>
            <p class='text-2xl'><strong>Ans: </strong>
                There are four main types of state you need to properly manage in your React application :<br />

                1. <strong>Local state:</strong>  Local state is data we manage in one or another component.Local state is most often managed in React using the useState hook.<br />
                2. <strong>Global state:</strong> Global state is data we manage across multiple components.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.<br />
                3. <strong>Server state:</strong> Data that comes from an external server that must be integrated with our UI state.Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.<br />
                4. <strong>URL state:</strong>  Data that exists on our URLs, including the pathname and query parameters.URL state is often missing as a category of state, but it is an important one.
            </p><br />
            <h2 class='text-3xl font-bold'>3. How does prototypical inheritance work?</h2>
            <p class='text-2xl'><strong>Ans: </strong>
                The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [Prototype] of an object, we use Object.getPrototypeOf and Object.JavaScript looks for inherited properties in the prototype of the object, but also in the prototype of the prototype, and so on in the chain of prototypes.
            </p><br />
            <h2 class='text-3xl font-bold'>4.  What is a unit test? Why should write unit tests?</h2>
            <p class='text-2xl'><strong>Ans: </strong>
                Unit testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected.
                <br />
                Unit tests save time and money. Usually, we tend to test the happy path more than the unhappy path. If you release such an app without thorough testing, you would have to keep fixing issues raised by your potential users. The time to fix these issues could've been used to build new features or optimize the existing system. Bear in mind that fixing bugs without running tests could also introduce new bugs into the system.Unit testing is an integral part of extreme programming. Extreme programming is basically a “test-everything-that-can-possibly-break” programming strategy.Unit tests make code reuse easier. If you want to reuse existing code in a new project, you can simply migrate both the code and tests to your new project, then run your tests to make sure you have the desired results.
            </p><br />
            <h2 class='text-3xl font-bold'>5. Why you do not set the state directly in React.</h2>
            <p class='text-2xl'><strong>Ans: </strong>
                When we directly update the state,it does not change this state immediately.Instead,it creates a pending state transition, and accessing it after calling this method will only return the present value.You will lose control of the state across all components.If we try to update state directly then it won't re-render the component.Instead use setState() method.It schedules an update to a component's state changes,the component responds by re-rendering.You can directly assign to the state object either in constructor or using latest javascript's class field declaration syntax.
            </p>
        </div>
    );
};

export default Blogs;