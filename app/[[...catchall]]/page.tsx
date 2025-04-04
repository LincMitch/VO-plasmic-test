"use client"

import { PlasmicComponent, PlasmicRootProvider } from "@plasmicapp/loader-nextjs"
import Error from "next/error"
import { useParams, useSearchParams } from "next/navigation"
import { PLASMIC } from "@/plasmic-init"
import { useEffect, useState } from "react"

export default function CatchAllPage() {
  const params = useParams()
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(true)
  const [plasmicData, setPlasmicData] = useState<any>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const catchall = params?.catchall
        const plasmicPath = Array.isArray(catchall)
          ? `/${catchall.join("/")}`
          : typeof catchall === "string"
            ? `/${catchall}`
            : "/"

        const data = await PLASMIC.maybeFetchComponentData(plasmicPath)
        setPlasmicData(data)
      } catch (e) {
        console.error("Error fetching Plasmic data:", e)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [params])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error || !plasmicData || plasmicData.entryCompMetas.length === 0) {
    return <Error statusCode={404} />
  }

  const pageMeta = plasmicData.entryCompMetas[0]
  const queryObject: Record<string, string> = {}

  // Convert searchParams to object
  searchParams.forEach((value, key) => {
    queryObject[key] = value
  })

  return (
    <PlasmicRootProvider
      loader={PLASMIC}
      prefetchedData={plasmicData}
      pageRoute={pageMeta.path}
      pageParams={pageMeta.params}
      pageQuery={queryObject}
    >
      <PlasmicComponent component={pageMeta.displayName} />
    </PlasmicRootProvider>
  )
}

