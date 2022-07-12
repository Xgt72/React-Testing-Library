const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: "John",
          last: "Doe",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/11.jpg",
        },
        login: {
          username: "The King of Universe",
        },
      },
    ],
  },
};

export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};
