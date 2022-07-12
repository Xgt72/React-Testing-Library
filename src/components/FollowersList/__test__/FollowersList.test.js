import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe("", () => {
  beforeEach(() => {
    console.log("Running before each test");
  });

  beforeAll(() => {
    console.log("Ran once before all tests");
  });

  it("should render above one follower item", async () => {
    render(<MockFollowersList />);

    const followerDivElement = await screen.findByTestId("follower-item-0");
    screen.debug();
    expect(followerDivElement).toBeInTheDocument();

    const followerItemNameElement = await screen.findByText(
      /The King of Universe/i
    );
    expect(followerItemNameElement).toBeInTheDocument();
  });

  it("should render above one follower item", async () => {
    render(<MockFollowersList />);

    const followerDivElement = await screen.findByTestId("follower-item-0");
    screen.debug();
    expect(followerDivElement).toBeInTheDocument();

    const followerItemNameElement = await screen.findByText(
      /The King of Universe/i
    );
    expect(followerItemNameElement).toBeInTheDocument();
  });

  // it("should render 5 follower items", async () => {
  //   render(<MockFollowersList />);

  //   const followerDivElements = await screen.findAllByTestId(/follower-item/i);
  //   expect(followerDivElements.length).toBe(5);
  // });
});
