import Link from "next/link"


const Form = ({
    type,
    post,
    submitting,
    setPost,
    handleSubmit }) => {
    return (
        <section
            className="w-full max-w-full flex-start flex-col"
        >
            <h1 className="head_text text-left">
                <span className="blue_gradient">{type}</span> Prompt
            </h1>


            <p className="desc text-left max-w-md">
                {type} a prompt to share with the community.
            </p>

            <form
                action=""
                onSubmit={handleSubmit}
                className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
            >
                <label htmlFor="">
                    <span className="font-satoshi font-semibold text-base text-gray-700">Your AI prompt: </span>
                </label>

                <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    value={post.prompt}
                    required
                    onChange={(e) => setPost({ ...post, prompt: e.target.value })}
                    placeholder="Write your prompt here..."
                    className="form_textarea"
                ></textarea>
                <label htmlFor="">
                    <span className="font-satoshi font-semibold text-base text-gray-700">Tags
                    </span>
                </label>
                <input
                    name=""
                    id=""
                    cols="30"
                    rows="2"
                    value={post.tag}
                    required
                    onChange={(e) => setPost({ ...post, tag: e.target.value })}
                    placeholder="#product, #webdevelopment, #idea"
                    className="form_input"
                ></input>
                <div
                    className="flex-between mx-3 mb-5 gap-4"
                >
                    <Link
                        href="/"
                        className="text-gray-500 text-sm"
                    >
                        Cancel
                    </Link>
                    <button
                        type="submit"
                        disabled={submitting}
                        className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
                    >
                        {submitting ? `${type}`: type}
                    </button>
                </div>
            </form>
        </section>
    )
}

export default Form