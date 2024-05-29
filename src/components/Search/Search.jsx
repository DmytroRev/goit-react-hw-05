import { Form, Field, Formik } from "formik";
import toast from "react-hot-toast";

export default function Search({ onSearch }) {
  const empty = () => {
    toast.error("There is nothing to search for", { position: "top-right" });
  };

  const handleSubmit = (value, action) => {
    if (value.query.trim() === "") return empty;
    onSearch(value.query);
    action.resetForm();
  };
  return (
    <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
      <Form>
        <Field
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
        />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
}
