# Firebase onAuthStateChanged Unsubscribe Issue

This repository demonstrates a common issue encountered when using Firebase's `onAuthStateChanged` listener: improper unsubscription, leading to memory leaks and unexpected behavior.  The `authBug.js` file shows the flawed implementation, while `authBugSolution.js` provides the correct solution.

## Problem

The `onAuthStateChanged` listener is not unsubscribed when it's no longer needed (e.g., when a component unmounts). This can result in the listener continuing to run indefinitely, leading to memory leaks and potential interference with other parts of your application.

## Solution

The solution involves using the returned unsubscribe function from `onAuthStateChanged` to properly detach the listener when it's no longer required. This ensures that the listener is cleaned up and prevents memory leaks.