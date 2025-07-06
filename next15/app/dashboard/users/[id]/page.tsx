const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  return (
    <div>
      <h1>User Details {id}</h1>
      <p>This is the user details page.</p>
      <p>Here you can view and manage user information.</p>
      <p>Feel free to customize this page as needed.</p>
      <p>Remember to handle user data securely and responsibly.</p>
    </div>
  );
};

export default page;
