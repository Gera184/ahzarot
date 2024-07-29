import React from 'react'
import Title from '../../../components/title/Title'
import { Form } from '../../../components/form/Form'
import { CContainer, CRow, CCol, CImage } from '@coreui/react'
import { Card } from '../../../components/card/Card'
import arrow from '../../../assets/svg-icons/arrow.svg'

export const Home = ({ homeData, direction }) => {
  const { home } = homeData
  const { cardsData, cardsButtonTitle, processStepsTitle, processStepsCardsData } = home

  return (
    <CContainer fluid className="p-0">
      <CContainer fluid className="bg_background pb-3">
        <Title title={home.title} addShadow={true} />
        <Form formData={home.form} direction={direction} />
        <CContainer className="pt-5">
          <Title title={home.subTitle} size="display-5" subtitle={home.subTitleText} />
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
              const isEven = index % 2 === 0

              return (
                <CRow className="item" key={card.title}>
                  {isEven ? (
                    <>
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
                      <CCol xs={12} sm={12} md={4} lg={4}>
                        <CImage src={arrow} className="arrow" />
                      </CCol>
                      <CCol xs={12} sm={12} md={4} lg={4}>
                        <Card imgeSrc={card.imgSrc} isEven={isEven} />
                      </CCol>
                    </>
                  ) : (
                    <>
                      <CCol xs={12} sm={12} md={4} lg={4}>
                        <Card imgeSrc={card.imgSrc} isEven={isEven} />
                      </CCol>
                      <CCol xs={12} sm={12} md={4} lg={4}>
                        <CImage src={arrow} className="arrow" />
                      </CCol>
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
                    </>
                  )}
                </CRow>
              )
            })}
          </CContainer>
        </section>
      </CContainer>
    </CContainer>
  )
}
