
const Winner = ({result}) => {
    console.log(result);

    return (
    <div>
       {result ? <div className='rounded-lg bg-aq w-15 h-15'> Congrats! </div> : null}
    </div>);
}

export default Winner;