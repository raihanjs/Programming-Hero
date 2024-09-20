# Module-25 || Event, addEventListener, EventBubble

## What is DOM events

DOM (Document Object Model) events হল ব্রাউজার এবং ব্যবহারকারীর মধ্যে ইন্টারঅ্যাকশন করার একটি উপায়। যখনই একজন ব্যবহারকারী কোনও webpage-এ কোন কাজ করে, যেমন একটি বাটনে ক্লিক করে, কীবোর্ডের key চাপে, বা মাউস মুভ করে, সেই কাজকে একটি ইভেন্ট হিসেবে ধরা হয়। ইভেন্টগুলো ব্যবহার করে JavaScript দিয়ে নির্দিষ্ট কাজ বা প্রতিক্রিয়া ঘটানো যায়।

কিছু সাধারণ DOM ইভেন্টের উদাহরণ:

- click: যখন একটি এলিমেন্টে ক্লিক করা হয়।
- mouseover: যখন মাউস কোন এলিমেন্টের উপর দিয়ে যায়।
- keydown: যখন একটি কীবোর্ডের key চাপা হয়।
- submit: যখন একটি ফর্ম সাবমিট করা হয়।

JavaScript ইভেন্ট লিসেনার ব্যবহার করে এই DOM ইভেন্টগুলো detect এবং handle করা যায়। যেমন:

```
document.getElementById("myButton").addEventListener("click", function() {
  alert("Button clicked!");
});
```

এখানে, বাটনটিতে ক্লিক করলে একটি alert দেখানো হবে।

## Events Listener

ইভেন্ট লিসেনার হল একটি ফাংশন বা কোড ব্লক যা কোনও নির্দিষ্ট ইভেন্ট ঘটলে স্বয়ংক্রিয়ভাবে চালানো হয়। এটি মূলত DOM ইভেন্টগুলিকে পর্যবেক্ষণ (listen) করে এবং যখন একটি নির্দিষ্ট ইভেন্ট ঘটে, তখন সেই ইভেন্টের প্রতিক্রিয়া হিসেবে নির্দিষ্ট কাজ করে।

<br/>

যখন আপনি কোনও ইভেন্টের জন্য ইভেন্ট লিসেনার যোগ করেন, আপনি নির্ধারণ করেন যে কোন ইভেন্টে কী কাজ হবে। ইভেন্ট লিসেনার সাধারণত JavaScript-এর addEventListener() মেথড ব্যবহার করে DOM এলিমেন্টের সাথে যুক্ত করা হয়।

```
// ইভেন্ট লিসেনার যোগ করা হচ্ছে
document.getElementById("myButton").addEventListener("click", function() {
  alert("Button clicked!");
});
```

এই উদাহরণে:

- addEventListener() মেথড ব্যবহার করা হয়েছে।
- প্রথম প্যারামিটারটি হল "click", যা নির্দেশ করে যে যখন ব্যবহারকারী বাটনে ক্লিক করবে, তখন ইভেন্টটি ট্রিগার হবে।
- দ্বিতীয় প্যারামিটারটি একটি ফাংশন, যা ইভেন্টটি ঘটলে চালানো হবে (এক্ষেত্রে alert দেখানো হবে)।

ইভেন্ট লিসেনারের সুবিধা:

1. একাধিক ইভেন্টকে একটি এলিমেন্টে অ্যাটাচ করা যায়।
2. ইভেন্ট হ্যান্ডলারকে সরাসরি HTML-এ না লিখে, JavaScript কোডের মাধ্যমে পৃথকভাবে ম্যানেজ করা যায়।
3. নির্দিষ্ট শর্তে ইভেন্টগুলি ডায়নামিকভাবে যোগ বা মুছে ফেলা যায়।

## Event Bubble

Event bubbling হল একটি ইভেন্ট হ্যান্ডলিং মেকানিজম, যেখানে একটি ইভেন্ট প্রথমে সেই এলিমেন্টে ট্রিগার হয় যেখানে ইভেন্টটি ঘটে এবং তারপর তার parent elements (উর্ধ্বতন এলিমেন্ট) গুলোর দিকে চলে যায়, একে একে সকল parent element পর্যন্ত পৌঁছায়। এই প্রক্রিয়ায় ইভেন্টটি DOM ট্রি বরাবর উপরের দিকে (bubble) উঠতে থাকে।

<br/>

ধরা যাক, একটি <div> এর ভিতরে একটি <button> আছে। যদি আপনি বাটনে ক্লিক করেন, ইভেন্টটি প্রথমে বাটনে ঘটবে, এরপর <div>, তারপর তার parent element ইত্যাদির উপরেও পৌঁছাতে পারে। ইভেন্টটি এইভাবে উপরের দিকে "bubble" করে।

### stopPropagation()

stopPropagation() হল একটি মেথড যা ইভেন্ট bubbling বা capturing (উপর থেকে নিচে যাওয়া) প্রক্রিয়াকে বন্ধ করতে ব্যবহৃত হয়। যখন এই মেথডটি ডাকা হয়, তখন ইভেন্টটি তার parent elements-এ পৌঁছাবে না, এবং শুধুমাত্র বর্তমান এলিমেন্টে ইভেন্টটি সীমাবদ্ধ থাকবে।

```
document.getElementById("childElement").addEventListener("click", function(event) {
  event.stopPropagation();  // ইভেন্টটি বাচ্চা এলিমেন্টেই সীমাবদ্ধ থাকবে
  alert("Child clicked");
});

document.getElementById("parentElement").addEventListener("click", function() {
  alert("Parent clicked");
});
```

এখানে, যখন childElement-এ ক্লিক করা হবে, তখন ইভেন্টটি তার parent parentElement-এ পৌঁছাবে না, কারণ stopPropagation() ডাকা হয়েছে।

#### stopImmediatePropagation()

stopImmediatePropagation() মেথডটি ইভেন্ট bubbling বা capturing বন্ধ করার পাশাপাশি একই ইভেন্টের জন্য যেকোনো অন্যান্য ইভেন্ট লিসেনারগুলিকে ডাকা থেকেও আটকায়। অর্থাৎ, যদি একটি ইভেন্টের জন্য একাধিক ইভেন্ট লিসেনার থাকে, তবে প্রথম ইভেন্ট লিসেনার থেকে stopImmediatePropagation() ডাকা হলে, বাকি ইভেন্ট লিসেনারগুলো আর চালিত হবে না।

```
document.getElementById("myButton").addEventListener("click", function(event) {
  event.stopImmediatePropagation();
  alert("First handler executed and stopped");
});

document.getElementById("myButton").addEventListener("click", function() {
  alert("Second handler executed");
});
```

## Event Delegation

Event Delegation হল একটি ইভেন্ট হ্যান্ডলিং টেকনিক যেখানে একটি parent এলিমেন্টের উপর ইভেন্ট লিসেনার অ্যাটাচ করা হয়, যাতে child elements-এ ইভেন্ট trigger হলে সেই parent এলিমেন্টের মাধ্যমে তা handle করা যায়। এই পদ্ধতিতে সরাসরি child elements-এ ইভেন্ট লিসেনার অ্যাটাচ না করে, একক parent এলিমেন্টে ইভেন্ট হ্যান্ডল করা হয়।

### Event Delegation কীভাবে কাজ করে?

Event delegation মূলত event bubbling-এর উপর নির্ভর করে। যখন একটি child element-এ ইভেন্ট ঘটে, তখন তা event bubbling-এর কারণে তার parent elements-এর কাছে propagate হয়। এই ফিচারকে কাজে লাগিয়ে, আপনি ইভেন্টটি সরাসরি নির্দিষ্ট child element-এ অ্যাটাচ না করে parent element-এর মাধ্যমে manage করতে পারেন।

### Event Delegation-এর সুবিধা:

1. কম ইভেন্ট লিসেনার: অনেকগুলো child elements-এর জন্য আলাদা ইভেন্ট লিসেনার না দিয়ে, parent element-এর একটি ইভেন্ট লিসেনার ব্যবহার করে কাজ করা যায়। এতে performance উন্নত হয়, বিশেষত অনেকগুলো ডাইনামিক এলিমেন্ট থাকলে।

2. ডাইনামিক এলিমেন্ট হ্যান্ডলিং: DOM-এ নতুন child elements যোগ করা হলে তাদের জন্য আলাদা ইভেন্ট লিসেনার অ্যাটাচ করতে হয় না, কারণ parent element এর মাধ্যমে তাদের ইভেন্টগুলোও হ্যান্ডল করা যাবে।

উদাহরণ:

```
<ul id="parentList">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

এখানে ul এলিমেন্টের মধ্যে বেশ কিছু li এলিমেন্ট রয়েছে। প্রতিটি li-এর জন্য আলাদা ইভেন্ট লিসেনার অ্যাটাচ না করে আমরা ul এর মাধ্যমে ইভেন্ট হ্যান্ডল করতে পারি:

```
document.getElementById("parentList").addEventListener("click", function(event) {
  // event.target চেক করে নিশ্চিত করতে হবে যে ক্লিক করা child element-টি কোনটি
  if (event.target.tagName === 'LI') {
    alert("You clicked on " + event.target.textContent);
  }
});
```

এখানে, যখনই কোন li এলিমেন্টে ক্লিক করা হবে, ইভেন্টটি ul-এ propagate হবে এবং ul-এর ইভেন্ট লিসেনার ইভেন্টটি হ্যান্ডল করবে।

### Event Delegation-এর ব্যবহার:

1. ডাইনামিক কন্টেন্ট হ্যান্ডল করতে: যদি নতুন child elements ডাইনামিকভাবে যোগ বা সরানো হয়, event delegation ব্যবহার করে parent element-এর মাধ্যমে তাদের ইভেন্টগুলো হ্যান্ডল করা যায়।

2. বেশি সংখ্যক elements থাকলে: যদি অনেকগুলো এলিমেন্টের জন্য ইভেন্ট লিসেনার দরকার হয়, event delegation ব্যবহার করে একক ইভেন্ট লিসেনার দিয়ে কাজটি সম্পন্ন করা যায়।
