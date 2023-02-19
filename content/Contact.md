---
title: My First Item
id: 1
date: 28-11-2022
---

<style>
    .heading{
        font-weight: 600;
        font-size: 1.5rem; 
        margin:1rem 0rem
    }
    .labelEmail{
        display:flex ; 
        align-items:center; 
        font-weight:bold;
        padding: 0.5rem;
    }
    .valueEmail{
        font-weight:500;
        padding-left:4rem;
    }
    .linkEmail{
        color: #531fff; 
        text-underline-position: under;
    }
    .labelOther{
        display:flex ;
        font-weight:bold; 
        padding:1rem 0.5rem;
    }
    .container{
        font-weight:600;
    }
    .wrapper{
        display: flex;
        flex-direction:column;
        gap:1rem;
        margin: 0rem;
    }
    .linkOther{
        color: #531fff;
        text-underline-position: under;
        font-weight: 400;
    }
</style>

<div class="heading">You can connect with me </div>

<div class="labelEmail">Email: 
    <div class="valueEmail">
        <a href="#" class="linkEmail">nigamchandni139@gmail.com</a>
    </div>
</div>

<div class="labelOther">Other Links: 
     <div class="container"> 
        <ul class="wrapper">
        <li>
            <a href="https://github.com/chandninigam" class="linkOther">Github </a>
        </li>
        <li>
            <a href="https://linkedin.com/in/chandni-nigam/" class="linkOther">LinkedIn </a>
        </li>
        <li>
            <a href="https://twitter.com/nigamchandni139" class="linkOther">Twitter </a>
        </li>
        </ul>
     </div>
</div>
