// invalid snippet
// An asynchronously operation which will generation error

try {
  asyn_method('invalid_argument_generate_error', (err, data) => {
    if (err) {
      throw err;
    }
    console.log(data);
  });
} catch (error) {
  console.error(error);
}
