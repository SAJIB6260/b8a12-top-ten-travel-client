import { motion } from "framer-motion"

const Blogs = () => {
    return (
        <div>
			<h1 className='text-center text-3xl font-bold text-primary my-4'>
				Welcome to My Blogs
			</h1>
            {/* blog-1 */}
			<motion.div initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 1 }}  
			className='mockup-window border-2 border-secondary bg-base-200 mx-12 hover:bg-[#16CAC9] hover:text-white my-2'>
				<h1 className='text-center text-xl '>
					How wil you improve the performance of a React Application?
				</h1>
				<div className='  px-4 py-6  hover:bg-[#16CAC9] hover:text-white'>
					We know that react is popular for it&apos;s performance and
					optimization.There are lot of ways to improve performance.If we
					can follow those things,our react app will improve the
					performance more.So there are some common techniques we can
					follow or use.
					<li>Keeping component state local where necessary.</li>
					<li>
						Memoizing React component too prevent unnessecary re-renders.
					</li>
					<li>Code-splitting in React using dynamic import()</li>
					<li>Windowing or list virtualization in React.</li>
					<li>Lazy looading images in react.</li>
				</div>
			</motion.div>
			{/* blog-2 */}
			<motion.div initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 1 }} className='mockup-window border-2 border-secondary bg-base-200 mx-12 hover:bg-[#16CAC9] hover:text-white my-4'>
				<h1 className='text-center text-xl '>
					What are the different ways too manage state in a React
					Application?
				</h1>
				<div className='  px-4 py-6  hover:bg-[#16CAC9] hover:text-white'>
					Managing state in React app isn&apos;t as simple as using usestate oor
					useReducer.There are different kinds of states and there are a
					lot of ways to managing thoose states.There are some kinds of
					react states. Local state,Global state,Server State,URL state.
					<li>
						We manage our local state using useState most of the time.
					</li>
					<li>
						Global state is data we manage across multiple components.
						Global state is necessary when we want to get and update data
						anywhere in our app, or in multiple components at least
					</li>
					<li>
						Server state Data that comes from an external server that must
						be integrated with our UI state. Server state is a simple
						concept, but can be hard to manage alongside all of our local
						and global UI state.
					</li>
					<li>
						URL state is often missing as a category of state, but it is
						an important one.
					</li>
					<li>
						Server state is a simple concept, but can be hard to manage
						alongside all of our local and global UI state.
					</li>
				</div>
			</motion.div>
			{/* blog-3 */}
			<motion.div initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 1 }} className='mockup-window border-2 border-secondary bg-base-200 mx-12 hover:bg-[#16CAC9] hover:text-white my-4'>
				<h1 className='text-center text-xl '>
					How does prototypical inheritence works??
				</h1>
				<p className='  px-4 py-6  hover:bg-[#16CAC9] hover:text-white'>
					Every object with its methods and properties contains an internal
					and hidden property known as . The Prototypal Inheritance is a
					feature in javascript used to add methods and properties in
					objects. It is a method by which an object can inherit the
					properties and methods of another object. Traditionally, in order
					to get and set the of an object, we use Object.getPrototypeOf and
					Object.setPrototypeOf. Nowadays, in modern language, it is being
					set using proto.
				</p>
			</motion.div>
			{/* blog-4 */}
			<motion.div initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 1 }} className='mockup-window border-2 border-secondary bg-base-200 mx-12 hover:bg-[#16CAC9] hover:text-white my-4'>
				<h1 className='text-center text-xl '>
					Why we do not set the state directly in React?
				</h1>
				<p className='  px-4 py-6  hover:bg-[#16CAC9] hover:text-white'>
					In react state is an important concept.Normally we call this But if we set the state
					value directly we find the updated value.State 
					update imediately.Instead it creates a pending state
					teansition,and accessing it after calling this method will only
					return the present value. We will lose control of the state
					across all components.So we set the state directly.
				</p>
			</motion.div>
			{/* blog-5 */}
			<motion.div initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 1 }} className='mockup-window border-2 border-secondary bg-base-200 mx-12 hover:bg-[#16CAC9] hover:text-white my-4'>
				<h1 className='text-center text-xl '>
					You have an array of prooducts.Each object has a name ,price
					,description etc.How to implement a search to find product by
					name?
				</h1>
				<p className='  px-4 py-6  hover:bg-[#16CAC9] hover:text-white'>
					To find the expected result I can make filter option to search
					from the product. Ex= const filterd =
					products.filter(product=/product.name.includes(searchText)) This
					filtered will give an array inpm install framer-motionncluding all the objects which
					includes the searchText.
				</p>
			</motion.div>
			{/* blog-6 */}
			<motion.div initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 1 }} className='mockup-window border-2 border-secondary bg-base-200 mx-12 hover:bg-[#16CAC9] hover:text-white my-4 mb-8'>
				<h1 className='text-center text-xl '>
					What is unit test?Why should we write unit tests?
				</h1>
				<p className='  px-4 py-6  hover:bg-[#16CAC9] hover:text-white'>
					UNIT TESTING is a type of software testing where individual units
					or components of a software are tested. The purpose is to
					validate that each unit of the software code performs as
					expected. Unit Testing is done during the development (coding
					phase) of an application by the developers. Unit Tests isolate a
					section of code and verify its correctness. A unit may be an
					individual function, method, procedure, module, or object.
				</p>
			</motion.div>
		</div>
    );
};

export default Blogs;