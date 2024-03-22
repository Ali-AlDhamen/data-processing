const handleError = (error: any) => {
  const ResponseJson = JSON.stringify({
    status: error.statusCode || 500,
    message: error.message || "Internal server error",
  });
  return new Response(ResponseJson, { status: error.statusCode || 500 });
};


export default handleError;