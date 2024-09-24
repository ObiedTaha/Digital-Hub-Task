// import React from 'react';
// import Select from 'react-select'
// const customStyles = {
//     control: (provided) => ({
//         ...provided,
//         backgroundColor: '',
//         borderColor: 'blue',
//         '&:hover': {
//             borderColor: 'darkblue',
//         },
//     }),

//     option: (provided, state) => {
//         const colors = ['red', 'yellow', 'green'];
//         const index = state.data.index % colors.length; // Calculate index for colors

//         return {
//             ...provided,
//             backgroundColor: state.isSelected ? 'blue' : state.isFocused ? ' ' : 'white',
//             color: state.isSelected ? 'white' : 'black',
//             padding: 10,
//             position: 'relative',
//         };
//     },
//     optionBullet: (index) => ({
//         content: '""',
//         position: 'absolute',
//         left: '50px',
//         top: '50%',
//         transform: 'translateY(-50%)',
//         width: 10,
//         height: 10,
//         borderRadius: '50%',
//         backgroundColor: ['red', 'yellow', 'green'][index % 3], // Alternating colors
//     }),
//     singleValue: (provided) => ({
//         ...provided,
//         color: 'darkblue',
//     }),
//     placeholder: (provided) => ({
//         ...provided,
//         color: '',
//     }),
// };


export default function Dropdown() {
    
    // const options = [
    //     { value: 'Not Started', label: 'Not Started' },
    //     { value: 'Finished', label: 'Finished' },
    //     { value: 'In Progress', label: 'In Progress' },
    // ].map((option, index) => ({
    //     ...option,
    //     index, // Include index for bullet color
    // }));
    return <>
        {/* <Select 
      styles={customStyles}
      options={options}
      placeholder="Status..."
      formatOptionLabel={({ label, index }) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span
            style={{
              display: 'inline-block',
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: ['red', 'green', 'yellow'][index % 3], // Bullet color
              marginRight: '10px', // Space between bullet and label
            }}
          />
          {label}
        </div>
      )}
    /> */}
    </>
}
