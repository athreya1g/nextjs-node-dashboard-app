import { render, screen, waitFor } from "@testing-library/react";
import Blogs from "../pages/blogs";
import '@testing-library/jest-dom';
// Mocking the fetch call to return a static list of blogs
jest.mock("../hooks/useBlogs", () => ({
  useBlogs: () => ({
    blogs: [{ id: 1, title: "Test Blog" }],
    loading: false,
    error: null,
  }),
}));
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([{ id: 1, title: "Test Blog" }]),
  })
) as jest.Mock;

test("renders blogs list", async () => {
  render(<Blogs />);
  await waitFor(() => {
    expect(screen.getByText("Test Blog")).toBeInTheDocument();
  });
});