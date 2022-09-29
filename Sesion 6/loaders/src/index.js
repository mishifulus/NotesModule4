import './index.css';

const boxes = document.getElementsByClassName('box');
for (const box of boxes)
{
    box.addEventListener('click', function()
    {
        box.classList.toggle('box-active');
    })
}