import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import awsconfig from '../Users/aaronkuo/Projects/aws/src/aws-exports.js';
import { Amplify} from "aws-amplify";

Amplify.configure(awsconfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
