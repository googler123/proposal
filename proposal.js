{\rtf1\ansi\ansicpg1252\cocoartf2867
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 function showImage() \{\
const result = document.getElementById('result');\
result.style.display = 'block';\
createHearts();\
\}\
\
\
function moveNo(btn) \{\
const x = Math.random() * 200 - 100;\
const y = Math.random() * 200 - 100;\
btn.style.transform = `translate($\{x\}px, $\{y\}px)`;\
\}\
\
\
function createHearts() \{\
for (let i = 0; i < 20; i++) \{\
const heart = document.createElement('div');\
heart.className = 'floating-heart';\
heart.innerText = '\uc0\u10084 ';\
heart.style.left = Math.random() * 100 + 'vw';\
heart.style.animationDuration = 4 + Math.random() * 3 + 's';\
document.body.appendChild(heart);\
setTimeout(() => heart.remove(), 7000);\
\}\
\}}