import React from 'react'
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import ToolbarComponent from '../../../shared/Toolbar/Toolbar';
import { useForm } from 'react-hook-form';
import { FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { InputTextarea } from "primereact/inputtextarea";

export default function AddProductComponent() {
    const initFormVal = {
        productTitle: ''
    }
    const { productFormVal, handleSubmit } = useForm(initFormVal);

    const onSaveProduct = () => {
        console.log('@ from details', productFormVal);
    }

    return (
        <div className='procuct-wrapper'>
            <div className="toolbar mt-3 mb-3">
                <ToolbarComponent header={'Add Product'} />
            </div>
            <div className='pd-container'>
                <div className="p-fluid mt-4 mb-5">
                    <span className="p-input-icon-left">
                        <i className="pi pi-search" />
                        <InputText placeholder="Search" className="p-inputtext-sm" />
                    </span>
                </div>
                <form onSubmit={handleSubmit(onSaveProduct)} className="product-form">
                    <div className="grid pt-3">
                        <div className="left-form col-5 p-fluid">
                            <div className="form-control">
                                <TextField id="outlined-basic" label="Product Name" variant="outlined" fullWidth size="small" />
                                <small id="productName-help" className='help-text'>
                                    Do not exceed 20 characters when entering the product name.
                                </small>
                            </div>

                            <div className="grid mt-4">
                                <div className="col-8 p-0">
                                    {/* <div className="form-control"> */}
                                    <FormControl sx={{ m: 1, width: '100%' }} size='small'>
                                        <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-helper-label"
                                            id="demo-simple-select-helper"
                                            // value={age}
                                            label="Category"

                                        // onChange={handleChange}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                        {/* <FormHelperText>With label + helper text</FormHelperText> */}
                                    </FormControl>
                                    {/* </div> */}
                                </div>
                                <div className="col-4 pt-0 pb-0">
                                    <FormControl sx={{ m: 1, minWidth: '100%' }} size='small'>
                                        <InputLabel id="demo-simple-select-helper-label2">Gender</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-helper-label2"
                                            id="demo-simple-select-helper2"
                                            // value={age}
                                            // onChange={handleChange}
                                            label="Gender"
                                        // inputProps={{ 'aria-label': 'Without label' }}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                        {/* <FormHelperText>Without label</FormHelperText> */}
                                    </FormControl>
                                </div>
                            </div>

                            <div className="p-fluid col-12 p-0 mt-4">
                                <FormControl sx={{ mt: 1, width: '100%' }} size='small'>
                                    <InputLabel id="demo-simple-select-helper-label2">Brand</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-helper-label2"
                                        id="demo-simple-select-helper2"
                                        // value={age}
                                        // onChange={handleChange}
                                        label="Brand"
                                    // inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                    {/* <FormHelperText>Without label</FormHelperText> */}
                                </FormControl>
                            </div>

                            <div className="p-fluid col-12 p-0 mt-4">
                                <label htmlFor="">Descriptions</label>
                                <InputTextarea rows={5} cols={30} className="mt-1"/>
                                <FormHelperText>Do not exceed 20 characters when entering the product description.</FormHelperText>
                            </div>
                        </div>
                        <div className="right-form col-7">
                            <Button type='submit' label='Save'></Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
