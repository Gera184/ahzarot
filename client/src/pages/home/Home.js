import React from 'react'
import { Form } from '../../components/index'
import { CContainer, CRow, CCol, CImage, CCarousel, CCarouselItem } from '@coreui/react'
import { Card } from '../../components/index'
import arrow from '../../assets/svg-icons/arrow.svg'
import { Title } from '../../components/index'

export const Home = ({ texts, direction }) => {
  const {
    cardsData,
    cardsButtonTitle,
    processStepsTitle,
    processStepsCardsData,
    whyUsTitle,
    whyUsContent,
    customersRecommendTitle,
    customersRecommendSubTitle,
    customersRecommendContent,
    customersRecommendImges,
  } = texts.home

  return (
    <CContainer fluid className="p-0">
      <CContainer fluid className="bg_background pb-3">
        <Title title={texts?.home.title} addShadow={true} />
        <Form formData={texts?.home.form} direction={direction} />
        <CContainer className="pt-5">
          <Title
            title={texts?.home.subTitle}
            size="display-5"
            subtitle={texts?.home.subTitleText}
          />
          <CRow className="justify-content-center">
            {cardsData.map((card) => (
              <CCol
                xs={12}
                sm={12}
                md={6}
                lg={3}
                key={card.title}
                className="mb-4 d-flex justify-content-center"
              >
                <Card
                  title={card.title}
                  to={card.to}
                  buttonTitle={cardsButtonTitle}
                  icon={card.icon}
                />
              </CCol>
            ))}
          </CRow>
        </CContainer>
      </CContainer>

      <CContainer fluid className="p-0 pt-3 process_steps_container justify-content-center">
        <Title title={processStepsTitle} size="display-6" />
        <section className="hiw">
          <CContainer className="items">
            {processStepsCardsData.map((card, index) => {
              return (
                <CRow className="item" key={card.title}>
                  <CCol xs={12} sm={12} md={4} lg={4}>
                    <div className="text">
                      <div className="txt">
                        <h3 className="item-name">
                          <span className="number">{index + 1}.</span> {card.title}
                        </h3>
                        {card.content}
                      </div>
                    </div>
                  </CCol>
                  <CCol xs={12} sm={12} md={4} lg={4} className="arrow_wrapper">
                    <CImage src={arrow} className="arrow" />
                  </CCol>
                  <CCol xs={12} sm={12} md={4} lg={4}>
                    <Card imgeSrc={card.imgSrc} direction={direction} />
                  </CCol>
                </CRow>
              )
            })}
          </CContainer>
        </section>
      </CContainer>

      <CContainer
        fluid
        className="why_us_wrapper text-center d-flex flex-column align-items-center"
      >
        <CRow>
          <CCol>
            <h2 className="why_us_title">{whyUsTitle}</h2>
          </CCol>
        </CRow>
        <CRow className="w-100 justify-content-center">
          {whyUsContent.map((v) => (
            <CCol key={v.text} xs={6} sm={6} md={3} lg={3} className="text-center">
              <img src={v.imgSrc} />
              <div className="image-text">{v.text}</div>
            </CCol>
          ))}
        </CRow>
      </CContainer>

      <CContainer
        fluid
        className="customers_recommend_container text-center align-items-center pt-5 pb-5"
      >
        <CContainer>
          <CRow>
            <CCol>
              <h2 className="customers_recommend_container_title">{customersRecommendTitle}</h2>
            </CCol>
          </CRow>
          <CRow className="pb-3">
            <CCol>
              <h2 className="customers_recommend_container_sub_title">
                {customersRecommendSubTitle}
              </h2>
            </CCol>
          </CRow>
          <CRow className="customers_recommend_content">
            <CCol className="customers_recommend_text">
              <span>{customersRecommendContent}</span>
            </CCol>
          </CRow>
          <CRow className="mt-4">
            <CCol>
              <CCarousel controls={false} indicators={false} interval={3000}>
                {customersRecommendImges.map((imgSrc, index) => (
                  <CCarouselItem key={index}>
                    <CImage src={imgSrc} alt={`Customer Image ${index + 1}`} />
                  </CCarouselItem>
                ))}
              </CCarousel>
            </CCol>
          </CRow>
        </CContainer>
      </CContainer>
    </CContainer>
  )
}
