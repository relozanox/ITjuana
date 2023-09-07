# ITJUANA EXCERCISE

This program is designed to run on the command line and takes two newline-separated files as input: one containing the
street addresses of the shipment destinations and the other containing the names of the drivers. The output includes
the total SS and a matching between shipment destinations and drivers.

## Installation

1. Make sure you have Node.js installed on your system. If not, you can download it [here](https://nodejs.org/).

2. Clone this repository or download the source code.

3. Open a terminal and navigate to the project's root folder.

4. Run the following command to install the dependencies:

   ```bash
   npm install
   ```

5. Once the dependencies are installed, you can run the tests using the following command:

```bash
   npm test
   ```


## Usage

To run the project, follow these steps:

1. Open a terminal and navigate to the project's root folder.

2. Run the following command to start the application:

   ```bash
   node src/handler.js
   ```

The application will prompt you for the full path of two files:

- **Destinations file:** Enter the full path of the file containing destinations.
- **Driver names file:** Enter the full path of the file containing names.

The application will perform the necessary calculations and display the results in the console.

### Sample Input

Files should look like this example:

destinations.txt

```plaintext
Destination A
Destination B
Destination C
```

names.txt

```plaintext
Name A
Name B
Name C
```
