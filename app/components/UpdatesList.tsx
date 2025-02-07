const UpdateList = () => {
    const items = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Integer lobortis, diam vel finibus rhoncus, velit enim condimentum metus, sed tristique turpis urna quis neque.Suspendisse commodo, elit id egestas convallis, urna leo porttitor nibh, vel placerat massa nisl eu ex.",
        "Pellentesque aliquam consectetur sem, eget accumsan lorem fringilla eu.Nulla scelerisque quam pulvinar, tincidunt libero a, feugiat augue.In et consectetur nunc, ac feugiat risus.Ut elementum orci sed pharetra consequat.Sed tincidunt justo eu gravida suscipit.",
        "Sed nibh lectus, sagittis in purus ac, faucibus venenatis nulla.Aliquam erat volutpat.Nunc et enim sed magna faucibus bibendum vel nec neque.Nunc ac erat porta diam placerat egestas sed nec urna.Curabitur congue dapibus scelerisque.Quisque semper, ante ut blandit posuere, odio sapien elementum quam, vitae maximus libero arcu eget tellus."
    ]

    return <div className="flex flex-col max-w-[600px] items-center gap-4">
        <h1 className="text-3xl mt-8 max-w-[600px]">Updates</h1>
        <p className="text-gray-500 max-w-[400px]">Join the waitlist to get early access of the product and recieve updates on the progress!</p>
        {items.map((item, index) => {
            return <div key={`update-${index}`} className="bg-white/10 border border-white/15 p-4 rounded-2xl mb-2 text-start">
                <span className="flex w-100 justify-between">
                    <p className="text-orange-500">Title</p>
                    <p className="text-orange-500">Date</p>
                </span>
                <span className="text-gray-300">{item}</span>
            </div>
        })}
    </div>
}

export default UpdateList