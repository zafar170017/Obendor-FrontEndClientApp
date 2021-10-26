import React, { useCallback, useState } from 'react';
import { TextField, Button, Heading, Select, RadioButton, Stack, Card, Layout, Checkbox, ProgressBar, TextStyle, DisplayText,List,Banner } from '@shopify/polaris';
import './ImageOptimize.css';


export default function ImageOptimize() {
    const [value, setValue] = useState('');
    const [value1, setValue1] = useState('');
    const [selected, setSelected] = useState('today');

    const handleSelectChange = useCallback((value) => setSelected(value), []);


    const handleChange = useCallback((newValue) => setValue(newValue), []);
    const handleChange1 = useCallback((newValue) => setValue(newValue), []);

    const [Radiovalue, setRadioValue] = useState('disabled');

    const handleRadioChange = useCallback(
        (_checked, newValue) => setRadioValue(newValue),
        [],
    );
    const [checked, setChecked] = useState(false);
    const handleCheckedChange = useCallback((newChecked) => setChecked(newChecked), []);


    const options = [
        { label: 'Do not resize', value: '0' },
        { label: '4000px', value: '4000' },
        { label: '2048px (Recommended by Shopify)', value: '2048' },
        { label: '1600px', value: '1600' },
        { label: '1200px (Recommended by TinyIMG)', value: '1200' },
        { label: '1024px', value: '1024' },
        { label: '1000', value: '1000' },
        { label: '1000', value: '1000' },
    ];
    return (
        <div>
            <div className="app-wrapper">
                <fieldset className="setup-options">
                    <h3>Optimize image ALT text, filename and size</h3>
                    <h6>Increase your product image rankings in search engines by optimizing filename and adding ALT text to your
                        product images.</h6>
                    <div className="row input-options">
                        <div className="col-xs-12 col-sm-12 col-lg-4">
                            <div className="form-group text-left"><label for="image_alt">Image ALT text template</label>
                                <TextField
                                    value={value}
                                    onChange={handleChange}
                                    autoComplete="off"
                                />
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-lg-4">
                            <div className="form-group text-left"><label for="filename">Image filename template</label>
                                <TextField
                                    value={value1}
                                    onChange={handleChange1}
                                    autoComplete="off"
                                />
                            </div>
                        </div>
                        <div className="template-variables text-left d-lg-none col-sm-12">
                            <p>Template variables:</p> <input type="text" className="d-none" />
                            <div className="template-variable">
                                #product_name#
                            </div>
                            <div className="template-variable">
                                #product_type#
                            </div>
                            <div className="template-variable">
                                #product_vendor#
                            </div>
                            <div className="template-variable">
                                #shop_name#
                            </div>
                            <div className="template-variable">
                                #variant_sku#
                            </div>
                            <div className="template-variable">
                                #variant_barcode#
                            </div>
                            <div className="template-variable">
                                #option1#
                            </div>
                            <div className="template-variable">
                                #option2#
                            </div>
                            <div className="template-variable">
                                #option3#
                            </div>
                            <div className="template-variable">
                                #original_value#
                            </div>
                            <div className="template-variable">
                                Need more ? Contact support
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-lg-4">
                            <div className="form-group text-left"><label for="resize_to">Resize oversized images to:</label>
                                <Select

                                    options={options}
                                    onChange={handleSelectChange}
                                    value={selected}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="template-variables text-left d-none d-lg-block d-xl-block">
                        <p>Template variables:</p> <input type="text" className="d-none" />
                        <div className="template-variable">
                            #product_name#
                        </div>
                        <div className="template-variable">
                            #product_type#
                        </div>
                        <div className="template-variable">
                            #product_vendor#
                        </div>
                        <div className="template-variable">
                            #shop_name#
                        </div>
                        <div className="template-variable">
                            #variant_sku#
                        </div>
                        <div className="template-variable">
                            #variant_barcode#
                        </div>
                        <div className="template-variable">
                            #option1#
                        </div>
                        <div className="template-variable">
                            #option2#
                        </div>
                        <div className="template-variable">
                            #option3#
                        </div>
                        <div className="template-variable">
                            #original_value#
                        </div>
                        <div className="template-variable">
                            Need more ? Contact support
                        </div>
                    </div>
                    <div className="setup-actions"><button type="button" className="btn btn-shop">
                        Next Step
                    </button>
                        {/* <!-- <button type="button" className="btn btn-shop-o">
                Skip this step
            </button> --> */}
                    </div>
                    <div className="clearfix"></div>
                </fieldset>

            </div>
            <div className="app-wrapper">
                <Heading element="h1">Online store dashboard</Heading>
                <div>Choose a default compression method for your images. Don't worry, you can always change it later. </div>
                <br /><br />
                <Layout>
                    <Layout.Section>
                        <Card title="Compression" sectioned>
                            <Stack vertical>
                                <RadioButton
                                    label="Lossy compression"
                                    helpText="Decreases image size with some quality loss. Typical compression: 5-70%."
                                    checked={Radiovalue === 'disabled'}
                                    id="disabled"
                                    name="accounts"
                                    onChange={handleRadioChange}
                                />
                                <RadioButton
                                    label="Lossless compression"
                                    helpText="Decreases image size with no quality loss. Typical compression: 5-30%."
                                    id="optional"
                                    name="accounts"
                                    checked={Radiovalue === 'optional'}
                                    onChange={handleRadioChange}
                                />
                            </Stack>
                            <hr />
                            <Checkbox
                                label="Basic checkbox"
                                helpText="JPEG images are ideal for Shopify stores because they provide the best quality with the smallest file size. The PNG format is only advisable for images with a transparent background. The Image Optimizer app can convert images from PNG to JPG and dramatically reduce the file size, up to 80% of the original size. Transparent PNGs will have a white background."
                                checked={checked}
                                onChange={handleCheckedChange}
                            />
                        </Card>

                    </Layout.Section>
                </Layout>
                <br />
                <Button primary>Next</Button>
                <br /><br />
                <Heading element="h1">Do you want to optimize your alt texts?</Heading>
                <div>Choose if you want to automatically optimize your alt texts. Don't worry, you can always change it later. </div>
                <br /><br />
                <Layout>
                    <Layout.Section>
                        <Card sectioned>
                            <Checkbox
                                label="Basic checkbox"
                                helpText="The Image Optimizer app can automatically set the alt text by using simple templates for images and, consequently, improve SEO and Google Image Search rankings."
                                checked={checked}
                                onChange={handleCheckedChange}
                            />
                        </Card>
                    </Layout.Section>
                </Layout>
                <br />
                <Button>Back</Button>
                <Button primary>Next</Button>
            </div>
            <br /><br />

            <div>
                <Heading element="h1">Do you want to optimize your image filenames?</Heading>
                <div>Choose if you want to automatically optimize your image filenames.</div>
                <br /><br />
                <Layout>
                    <Layout.Section>
                        <Card sectioned>
                            <Checkbox
                                label="Optimize Filenames"
                                helpText="The Image Optimizer app can automatically rename image filenames by using simple templates and, as a result, help the website rank higher on search engines. Only characters, numbers, and dashes are allowed. All other characters will be replaced by dashes. The app will also add a series of numbers at the end of the file name. This is required in order to have a unique file name for each image."
                                checked={checked}
                                onChange={handleCheckedChange}
                            />
                        </Card>
                    </Layout.Section>
                </Layout>
                <br />
                <Button>Back</Button>
                <Button primary>Next</Button>

                <br /><br />
            </div>
            <div className="lastStep">
                <Heading element="h1" style={{ marginTop: `2rem` }}>Optimizing your images</Heading>
                <div>We are currently optimizing your images. Please wait.</div>
                <br />
                <ProgressBar progress={70} color="primary" />
                <br /><br />
            </div>

            <div>
                <DisplayText size="large" align="center">Congratulation on your optimization!</DisplayText>

                <div className="col-md-3">

                </div>
                <div className="col-md-12">
                    <Layout>
                        <Layout.Section>
                            <Card sectioned>
                                <p>We have successfully optimized 50 images and saved you 14.4 KB of space.</p>
                                <br />
                                <p>If you have a paid subscription, Image Optimizer will periodically look for and optimize the following types of new images:</p>
                                <br />
                                <List type="bullet">
                                    <List.Item>Product images</List.Item>
                                    <List.Item>Collection images</List.Item>
                                    <List.Item>Asset images</List.Item>
                                </List>
                                <br/>
                                <Banner
  title="UPload Manual Fikes"
  action={{content: 'Update rates', url: ''}}
  status="info"
  onDismiss={() => {}}
>
  <p>Make sure you know how these changes affect your store.</p>
</Banner>
                            </Card>
                        </Layout.Section>
                    </Layout>
                </div>
                <div className="col-md-3">

                </div>

            </div>
        </div>
    );
}