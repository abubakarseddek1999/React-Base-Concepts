import "./Title.css"

const Card = (props) => {
    console.log(props);

    return (
        <div className='text-3xl flex flex-col justify-center items-center font-medium'>

            <div className="card  hover:bg-black  w-full bg-slate-900 mt-5 mx-12 shadow-2xl">

                <figure>
                    {/* <img src="https://i.ibb.co/fDbPv7h/Noha.jpg" alt="Shoes" /> */}
                    <img src="./Images/abu bakar.jpg" alt="" />
                </figure>

                <div className="card-body">
                    <h2 className="card-title title"> {props.title}</h2>
                    <p style={
                        {
                            color: "green",
                        }
                    }>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Visit Now</button>
                    </div>
                </div>
                <p className="text-center mb-2"> view: {props.views}</p>
                <p className="text-center mb-2"></p>

            </div>

        </div>
    );
};

export default Card;