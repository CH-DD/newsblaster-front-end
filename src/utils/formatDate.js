/* Date Formatter 
    - converts dates from long ISO8601 format to more readable format 
    - formatting style based on user's locale
*/

// Date only
export const formatDate = (suppliedLongDate) => {

    let formattedDate = 
        new Date(suppliedLongDate).toLocaleDateString(navigator.language, {
            year: '2-digit', month: 'short', day: '2-digit'
        });
    return (formattedDate);
}

// Date and time 
export const formatDateAndTime = (suppliedLongDate) => {

    let formattedDateAndTime = 
        new Date(suppliedLongDate).toLocaleDateString(navigator.language, {
            year: '2-digit', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit'
        });
    return (formattedDateAndTime);
}
 

