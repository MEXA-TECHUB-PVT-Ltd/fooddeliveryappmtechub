if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "C:/Users/Danish Computers/.gradle/caches/transforms-3/7f8ea71b23d4bdf4d5fe2497e3497469/transformed/jetified-hermes-android-0.74.1-debug/prefab/modules/libhermes/libs/android.arm64-v8a/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "C:/Users/Danish Computers/.gradle/caches/transforms-3/7f8ea71b23d4bdf4d5fe2497e3497469/transformed/jetified-hermes-android-0.74.1-debug/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

