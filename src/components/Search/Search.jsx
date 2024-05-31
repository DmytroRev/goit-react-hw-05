import { Form, Field, Formik } from "formik";
import toast from "react-hot-toast";
import css from "./Search.module.css";

export default function Search({ onSearch }) {
  const empty = () => {
    return toast.error("There is nothing to search for", {
      position: "top-right",
    });
  };
  // console.log(empty());
  const handleSubmit = (value) => {
    if (value.query.trim() === "") return empty();

    onSearch(value.query);
    // action.resetForm();
  };

  return (
    <div className={css.container}>
      <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
        <Form>
          <Field
            className={css.input}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
          />
          <button className={css.btn} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
}
