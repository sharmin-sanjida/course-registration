import Card from '../Cart/Card'
import PropTypes from 'prop-types' ;


const Carts = ({carts}) => {
    

    return (
        <div className ="">
<div className=" mt-4 w-96 h-80 rounded-xl  bg-slate-200"><div className=" border-black text-center text-xl text-black "><h2 className='pt-4 gap-4'>Credit Hour Remaining 7 hr  {carts.length}
<h2 className='font-semi-bold text-2xl'>Course Name : </h2></h2>
{
    carts.map(card => <Card key={card.id}card = {card}></Card> )
}

 
<h2>Total Credit Hour : </h2>
<h2>Total Price : </h2></div>
</div>


        </div>
    );
};
Carts.propTypes = {
    carts: PropTypes.array
}

export default Carts;






