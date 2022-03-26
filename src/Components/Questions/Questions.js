import React from 'react';
import './Questions.css'

const Questions = () => {
    return (
        <div className='questions'>
            <p>Q1: Difference Between Props vs State
                <br />
                Ans: props শুধু read only করা যাই কিন্তু state একটা updatable structure যেটা পরিবর্তন করা যাই। thats why props are immutable and states are mutable।props এ আমরা  এক components থেকে আরেক components  এ ডাটা পাঠাই arguments হিসেবে কিন্তু state  এ পুরো components এর ইনফর্মেশন গুলি জমা থাকে।child component থেকে props কে acces করা যাই কিন্তু child component থেকে state কে acces করা যাই  না।props use করা হয় এক componets  থেকে আরেক componets এ communicate করার জন্যে কিন্তু state use করা হয় componets এর dynamic change গুলি re-rendering er জন্যে ।
            </p>
            <p>
                Q3. How UseState works???
                <br />
                Ans: usestate হচ্ছে Hook.hook হচ্ছে একটা special function যেটা react এর component এর ভিতরে state গুলি কন্ট্রোল করে। usestate  যখন declare করা হয় তখন usestate ২টা জিনিস দেয় একটা হচ্ছে state value and আরেকটা  হচ্ছে function  .এই ২টা জিনিস destructuring করে  একটা array তে return করে। usestate   declare করার সময় একটা initial value দিতে হয়।সেই value অনুসারে usestate  কাজ করে।

            </p>

        </div>
    );
};

export default Questions;