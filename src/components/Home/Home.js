import React, { Component } from 'react';
import { Carousel, CarouselInner, CarouselItem, View, Container } from 'mdbreact';

import Aux from '../../hoc/Auxh';


export class Home extends Component {
    render() {
        return (
            <Aux>

                <Container >
                    <Carousel
                        activeItem={1}
                        length={4}
                        showControls={true}
                        showIndicators={false}
                        className="z-depth-1">
                        <CarouselInner style={{ padding: "2%" }}>
                            <CarouselItem itemId="1">
                                <View>
                                    <img className="d-block w-100" src="http://www.yeadonlibrary.org/wp-content/uploads/2017/01/silhouette-1632912_1920.jpg" alt="First slide" style={{ height: "30", width: "50%" }} />
                                </View>
                            </CarouselItem>
                            <CarouselItem itemId="2">
                                <View>
                                    <img className="d-block w-100" src="https://www.easemytrip.com/travel/img/metro-library-3.jpg" alt="Second slide" style={{ height: "30%", width: "50%" }} />
                                </View>
                            </CarouselItem>
                            <CarouselItem itemId="3">
                                <View>
                                    <img className="d-block w-100" src="http://www.aiet.ac.in/sliderfiles/139/Library%20Book%20Shelves%20-%20Banner.jpg" alt="Third slide" style={{ height: "30%", width: "50%" }} />
                                </View>
                            </CarouselItem>
                            <CarouselItem itemId="4">
                                <View>
                                    <img className="d-block w-100" src="https://www.northampton.edu/Images/LandingPages/Boxes/libraryFacebookBox.jpg" alt="Mattonit's item" style={{ height: "30%", width: "50%" }} />
                                </View>
                            </CarouselItem>
                        </CarouselInner>
                    </Carousel>
                </Container>

            </Aux>
        );
    }
}
export default Home;