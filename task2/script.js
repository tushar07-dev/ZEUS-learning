const userName = document.getElementById( "name" );
const comments = document.getElementById("comment")

function submit()
{
    const list = document.forms[ 0 ];
    let isChecked = false;
    let selectedValue = '';
    for ( const elements of list )
    {
        if(elements.checked)
        {
            isChecked = true;
            // selectedValue = elements.value;
        }
    }
    if ( (!userName.value || !comments.value) || !isChecked )
    {
        window.alert( "All fields are compulsory" );
        if ( !userName.value )
        {
            userName.focus();
        }
        else
        {
            comments.focus();

        }
        
    }
    else {
        window.alert("Details Submitted Successfully!")
    }
}