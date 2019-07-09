<template lang='pug'>
  .pug-tutorial
    head

    h1 Getting Started with PUG js template Language
    |
    p Pug.js is a HTML templating engine, which means you can write much simpler Pug code, which Pug compiler will compile into HTML code, that browser can understand.
    p The general rendering process of Pug is simple.
    p Pug has powerful features like conditions, loops, includes, mixins using which we can render HTML code based on user input or reference data. Pug also support JavaScript natively, hence using JavaScript expressions, we can format HTML code.
    p An application of that would be Email Templates to send email customized to particular user. We can make an email template using Pug with variables that can be changed based on user to whom we are sending that email. Before sending email,we can compile Pug to HTML code with user data to fill the gaps where that dynamic information should go. Trust me, this will save you lot of time.
    p There are lot of applications where HTML code needs to be generated on server or browser and Pug fits perfectly for those kind of environments. So let’s get started.
    p Pug.js, as from its name is a JavaScript library. Hence, we can run it inside browser or on node.js. Here, I am using node.js to demonstrate few examples.
    p Pug provides two npm packages viz.pug and pug-cli. pug is a general purpose package and pug-cli are command line interface to compile pug code into HTML code from command line without writing any JavaScript code. I am going to start with pug-cli because this is very easy to do.
    p Hence, let’s install pug-cli package with command npm install -g pug-cli, -g because we need to install it globally as to access Pug commands from command prompt or terminal. Pug files ends with extension .pug and compiles to files with extension .html
    p If you have index.pug file in a folder, you can open terminal there and execute command pug index.pug which should compile index.pug into index.html file. If you have a separate folder for all .pug files, let’s say src then you should use pug src command which should place all compiled .html files in the same folder. I like all compiled files to be located in separate folder, like dist. Hence I used pug src --pretty --out dist command. You can visit repo page on GitHub at https://github.com/pugjs/pug-cli to know more about pug CLI command flags.
    //- p Let’s see how pug code looks like.

    //- iframe(src='//gist.github.com/thatisuday/f177ba0b0320e87726eb9446b5995617.js'
    //-     scrolling='no'
    //-     width='75%'
    //-     height='165')

</template>
